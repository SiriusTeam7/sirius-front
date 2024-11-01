import { useState } from 'react'
import { Button } from "@core/design-system/Button"
import { Textarea } from "@core/design-system/TextArea"

export default function ChallengeLayout() {
    const [response, setResponse] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Submitted response:', response)
        // Here you would typically send the response to your backend
    }

    return (
        <div className="min-h-screen bg-[#13161D] text-white font-['Roboto',sans-serif] p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">Challenge</h1>
                <div className="bg-[#1E2329] rounded-lg p-6 mb-8">
                    <p className="text-lg md:text-xl mb-4">
                        Describe a situation where you had to solve a complex problem. What was your approach, and what was the outcome?
                    </p>
                    <div className="inline-block bg-[#06E98A] text-[#13161D] text-sm font-bold px-3 py-1 rounded-full">
                        Problem Solving
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="response" className="block text-sm font-medium mb-2">Your Response</label>
                        <Textarea
                            id="response"
                            value={response}
                            onChange={(e) => setResponse(e.target.value)}
                            placeholder="Type your response here..."
                            className="w-full h-48"
                        />
                    </div>
                    <Button type="submit" size="lg">
                        Submit Response
                    </Button>
                </form>
            </div>
        </div>
    )
}