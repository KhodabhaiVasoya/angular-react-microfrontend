import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme CSS
import 'primereact/resources/primereact.min.css'; // PrimeReact CSS
import 'primeicons/primeicons.css'; // PrimeIcons CSS
import './DropdownComponent.css'; // Your custom CSS for DropdownComponent


const DropdownComponent = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    // Static options data with labels and values
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
        { label: 'Option 4', value: 'option4' },
        { label: 'Option 5', value: 'option5' },
        { label: 'Option 6', value: 'option6' },
        { label: 'Option 7', value: 'option7' },
        { label: 'Option 8', value: 'option8' },
        { label: 'Option 9', value: 'option9' },
        { label: 'Option 10', value: 'option10' },
    ];

    // Handler for onChange event
    const handleDropdownChange = (event) => {
        setSelectedOption(event.value);
        // Handle any additional logic here
    };

    return (
        <div className="dropdown-container">
            <h2>Dropdown Component with Filter</h2>
            <Dropdown
                value={selectedOption}
                options={options}
                onChange={handleDropdownChange}
                placeholder="Select an option..."
                filter
                showClear
                filterPlaceholder="Search options"
                className="p-dropdown-custom"
            />
        </div>
    );
};

export default DropdownComponent;
