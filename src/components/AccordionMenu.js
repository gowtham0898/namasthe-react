import React from 'react';
import AccordionMenuItems from './AccordionMenuItems';

const AccordionMenu = ({title, content, isOpen, onToggle }) => {
    //console.log("accordient items",content);
   
    return (
      <div className="container mx-auto p-4">
        <div className="mx-auto">
          <div className="border border-gray-300 rounded-md">
            <div className="border-b border-gray-300">
              <button
                className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                onClick={onToggle}>
                <span className="font-bold text-lg">{title} ({content.length})</span>
                <svg
                  className={`w-5 h-5 transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                     d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="p-4">
                  {content.map((item) => (
                    <AccordionMenuItems
                      key={item?.card?.info?.id}
                      itemData={item}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default AccordionMenu;
