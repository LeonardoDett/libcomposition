// import React, { useState } from 'react';

// interface Option {
//   value: string;
//   label: string;
// }

// interface CustomSelectProps {
//   options: Option[];
//   placeholder?: string;
// }

// const CustomSelect: React.FC<CustomSelectProps> = ({ options, placeholder = 'Selecione uma opção' }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedValue, setSelectedValue] = useState<string | null>(null);
//   const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);

//   const handleToggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSelectOption = (value: string) => {
//     setSelectedValue(value);
//     setIsOpen(false);
//   };

//   const selectedOption = options.find(opt => opt.label === selectedValue);

//   return (
//     <div>
//       <div
//         ref={setReferenceElement}
//         onClick={handleToggleDropdown}
//         style={{ cursor: 'pointer', width: '100%', height: '100%' }}
//       >
//         {selectedValue || placeholder}
//       </div>

//       <Popper
//         referenceElement={referenceElement}
//         isOpen={isOpen}
//         onClose={() => setIsOpen(false)}
//         className="bg-white border border-gray-300 rounded-md shadow-lg z-10"
//         popperOptions={{
//           modifiers: [{ name: 'sameWidth', enabled: true, fn: ({ state }) => { state.styles.popper.width = `${state.rects.reference.width}px`; }, phase: 'beforeWrite' }]
//         }}
//       >
//         {options.map((option) => (
//           <div
//             key={option.value}
//             onClick={() => handleSelectOption(option.label)}
//             className="p-2 cursor-pointer hover:bg-gray-100"
//           >
//             {option.label}
//           </div>
//         ))}
//       </Popper>
//     </div>
//   );
// };

// export default CustomSelect;