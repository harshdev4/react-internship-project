import React, { useContext } from "react";
import { ToolContext } from "../store/ToolContext";
import Tool from "./Tool";
import './ToolList.scss';

const ToolList = () => {
    const { toolList } = useContext(ToolContext); 
    return (
        <div className="tools">
            {toolList.map((tool, index) => (
                <Tool key={index} toolNo={index + 1} tool={tool} />
            ))}
        </div>
    );
};

export default ToolList;
 