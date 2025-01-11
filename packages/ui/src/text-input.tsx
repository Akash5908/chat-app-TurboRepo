interface InputProps {
  placeholder: string;
  size: string;
  children: string;
}

export default function TextInput({ placeholder, size, children }: InputProps) {
  return (
    <div>
      <input type="text" placeholder={placeholder}>
        {children}
      </input>
    </div>
  );
}
