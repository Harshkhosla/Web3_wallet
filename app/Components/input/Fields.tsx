import React from 'react';

interface FieldsProps {
  text: string;  
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

// Memoized Fields component
const Fields: React.FC<FieldsProps> = React.memo(({ text, label, onChange }) => {
  console.log(`${label} rendered`);

  return (
    <div>
      <input 
        type="text"  
        name={text} 
        placeholder={label} 
        onChange={onChange}
      />
    </div>
  );
});

export default Fields;
