
interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <p className="text-red-500 text-sm mt-2" role="alert">
      {message}
    </p>
  );
};

export default ErrorMessage;
