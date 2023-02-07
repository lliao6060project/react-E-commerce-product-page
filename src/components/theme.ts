interface ButtonType {
  [key: PropertyKey]: string;
}

export const ButtonType: ButtonType = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
  secondary: "bg-gray-600 hover:bg-gray-700 text-white font-bold rounded",
  basic: "border bg-blue-300 hover:bg-blue-500 hover:text-white font-bold rounded",
  delete: "bg-red-400 hover:bg-red-500 text-white font-bold rounded"
};

export const ButtonSize: ButtonType = {
  sm: "py-2 px-4 text-xs",
  md: "py-2 px-6 text-basic",
  lg: "py-3 px-8 text-lg"
}