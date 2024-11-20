export interface TestCase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  input: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expectedOutput: any;
}

export interface CodeSubmission {
  code: string;
  language: "javascript" | "python";
  testCases: TestCase[];
}

export interface RunnerProps {
  onCodeExecuted?: (success: boolean) => void;
}
