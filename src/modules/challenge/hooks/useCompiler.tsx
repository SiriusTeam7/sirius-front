import { useCallback, useEffect, useState } from 'react';
import { CodeSubmission, TestCase } from '@interfaces/Compiler.interface';

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        pyodide: any;
    }
}

export function useCompiler() {
    const [pyodideReady, setPyodideReady] = useState<boolean>(false);

    const loadPyodide = async () => {
        if (typeof window !== 'undefined' && !window.pyodide) {
            const pyodide = await import("pyodide/pyodide.js");
            const { loadPyodide } = pyodide;
            window.pyodide = await loadPyodide({
                indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/",
            });

        }
        setPyodideReady(true);
    };
    useEffect(() => {

        if (!pyodideReady) {
            loadPyodide();
        }
    }, [pyodideReady]);

    const runCode = useCallback(async (submission: CodeSubmission): Promise<boolean> => {
        console.log("🚀 ~ runCode ~ submission:", submission);
        try {
            switch (submission.language.toLowerCase()) {
                case 'javascript':
                    return await runJavaScript(submission.code, submission.testCases);
                case 'python':
                    return await runPython(submission.code, submission.testCases);
                default:
                    throw new Error(`Unsupported language: ${submission.language}`);
            }
        } catch (error) {
            console.error('Error executing code:', error);
            return false;
        }
    }, []);

    const runJavaScript = useCallback(async (code: string, testCases: TestCase[]): Promise<boolean> => {
        try {
            const userFunction = new Function(`return (${code})`)();

            for (const testCase of testCases) {
                const result = userFunction(...testCase.input);

                if (JSON.stringify(result) !== JSON.stringify(testCase.expectedOutput)) {
                    return false;
                }
            }

            console.log("🚀 ~ runJavaScript ~ testCases:", testCases);

            return true;
        } catch (error) {
            console.error('JavaScript execution error:', error);
            return false;
        }
    }, []);

    const runPython = useCallback(async (code: string, testCases: TestCase[]): Promise<boolean> => {


        try {
            const pyodide = window.pyodide;

            // Define the test function
            const testFunction = `
def run_tests(func):
    test_cases = ${JSON.stringify(testCases)}
    for i, test in enumerate(test_cases):
        result = func(*test['input'])
        if result != test['expectedOutput']:
            print(f"Test case {i + 1} failed: expected {test['expectedOutput']}, got {result}")
            return False
        return True
            `;

            // Combine user code, test function, and test execution
            const fullCode = `
${code}
            
${testFunction}
            
result = run_tests(greet)
            `;


            // Run the Python code
            pyodide.runPython(fullCode);

            // Get the result
            const result = pyodide.globals.get('result')
            console.log("🚀 ~ runPython ~ result:", result);

            return result;
        } catch (error) {
            console.error('Python execution error:', error);
            return false;
        }
    }, [pyodideReady]);

    return {
        runCode,
        pyodideReady
    };
}