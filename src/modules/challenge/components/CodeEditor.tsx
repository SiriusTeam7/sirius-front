import { useEffect, useRef, useState } from "react"

import { ToggleGroup, ToggleGroupItem } from "@/modules/core/design-system/Toggle"
import { Editor, EditorProps } from "@monaco-editor/react"
import * as monaco from 'monaco-editor'
import { Button } from "@/modules/core/design-system/Button"

const defaultJsCode = `function greet(name) {
    console.log(\`Hello, \${name}!\`);
    // Tu código aquí 👈
  }
  
  greet('World');`

const defaultPyCode = `def greet(name):
      print(f"Hello, {name}!")
      # Tu código aquí 👈
  
  greet("World")`

export default function CodeEditor() {
    const [language, setLanguage] = useState<'javascript' | 'python'>('javascript')
    const [code, setCode] = useState({
        javascript: defaultJsCode,
        python: defaultPyCode,
    })
    const [syntaxError, setSyntaxError] = useState<string | null>(null)
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)

    const handleEditorChange: EditorProps['onChange'] = (value) => {
        if (value !== undefined) {
            setCode((prevCode) => ({
                ...prevCode,
                [language]: value,
            }))
            // Clear syntax error when code changes
            setSyntaxError(null)
        }
    }

    const toggleLanguage = (newLanguage: 'javascript' | 'python') => {
        setLanguage(newLanguage)
        setSyntaxError(null)
    }

    const handleEditorDidMount: EditorProps['onMount'] = (editor) => {
        editorRef.current = editor
        monaco.editor.setModelLanguage(editor.getModel()!, language);
    }

    useEffect(() => {
        if (editorRef.current) {
            monaco.editor.setModelLanguage(editorRef.current.getModel()!, language);
        }
    }, [language]);

    const checkForSyntaxErrors = () => {
        if (editorRef.current) {
            const model = editorRef.current.getModel()
            if (model) {
                console.log("🚀 ~ checkForSyntaxErrors ~ model:", model)
                const markers = monaco.editor.getModelMarkers({ resource: model.uri })
                const errors = markers.filter(marker => marker.severity === monaco.MarkerSeverity.Error)
                console.log("🚀 ~ checkForSyntaxErrors ~ markers:", markers)
                if (errors.length > 0) {
                    setSyntaxError(`Syntax error: ${errors[0].message}`)
                    return true
                }
            }
        }
        return false
    }

    const handleSubmit = () => {
        if (checkForSyntaxErrors()) {
            return
        }
        console.log('Submitted code:', code[language])
    }

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div>
                <h2 className="text-2xl font-bold">Monaco Code Editor</h2>
                <ToggleGroup
                    type="single"
                    value={language}
                    onValueChange={(value) => value && toggleLanguage(value as 'javascript' | 'python')}
                    className="flex space-x-2"
                >
                    <ToggleGroupItem value="javascript" className="px-3 py-2">
                        JavaScript
                    </ToggleGroupItem>
                    <ToggleGroupItem value="python" className="px-3 py-2">
                        Python
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>

            <Editor
                height={320}
                language={language}
                value={code[language]}
                theme="vs-dark"
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                options={{
                    fontSize: 16,
                    tabSize: 2,
                    formatOnPaste: true,
                    formatOnType: true,
                    showUnused: true,
                    folding: false,
                    lineNumbersMinChars: 3,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabCompletion: "on",
                    wordWrap: "on",
                    minimap: {
                        enabled: false,
                    },
                }}
            />

            {
                syntaxError && (
                    <div className="text-red-500 text-sm mt-2">{syntaxError}</div>
                )
            }

            <Button onClick={handleSubmit} disabled={!!syntaxError} className="mt-4">Submit</Button>

        </div>
    )
}