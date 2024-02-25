import { createContext } from "react";

export const ToolContext = createContext({
    toolList: []
}
);

const ToolContextProvider = (props)=>{
    const toolList = [
        {
            toolTitle: "Builder 1",
            toolName: "WixPro 72-Inch Responsive Website Builder",
            toolAbout: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
            toolHighlight: "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
            toolRating: 9.8,
            ratingText: "Exceptional",
            toolLabel: "Best Choice"
        },
        {
            toolTitle: "Builder",
            toolName: "SiteCraft 68-Inch Ultimate Web Design Studio",
            toolAbout: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
            toolHighlight: "Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
            toolRating: 9.5,
            ratingText: "Excellent",
            toolLabel: "Best Value"
        },
        {
            toolTitle: "Builder 1",
            toolName: "WixPro 72-Inch Responsive Website Builder",
            toolAbout: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
            toolHighlight: "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
            toolRating: 9.3,
            ratingText: "Exceptional",
            toolLabel: null
        },
        {
            toolTitle: "CDK",
            toolName: "CDK Resposive Builder",
            toolAbout: "An extensive library of widgets and apps, and detailed step-by-step guides",
            toolHighlight: [{Count: 9.9, highlight: "Building Responsive"}, {Count: 8.9, highlight: "Cool"}, {Count: 8.9, highlight: "Docs"}],
            toolRating: 9.1,
            ratingText: "Very Good",
            toolFeature: ["Documentation", "Easy Use", "Out Of Box"],
            toolLabel: null
        }
    ];
   
    return  <ToolContext.Provider value={{toolList}}>
                {props.children}
            </ToolContext.Provider>
}

export default ToolContextProvider;
