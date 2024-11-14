import { renderHook } from "@testing-library/react";
import { useStateChallenge } from "../hooks/useStateChallange";

describe("useStateChallenge", () => {
    const mockOnSubmit = jest.fn();

    it("Valores iniciales del hook", async () => {
        const { result } = renderHook(() => useStateChallenge(mockOnSubmit));
        const { inputMode,
            audioBlob,
            response,
             } = result.current;

        expect(inputMode).toBe('text');
        expect(audioBlob).toBe(null);
        expect(response).toBe('');

    });

    it("handlesumit debe devolver con tipo text", async () => {
        const { result } = renderHook(() => useStateChallenge(mockOnSubmit));
        const { inputMode,
            audioBlob,
            response,
             } = result.current;

        expect(inputMode).toBe('text');
        expect(audioBlob).toBe(null);
        expect(response).toBe('');

    });
});
