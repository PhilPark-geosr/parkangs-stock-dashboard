import { useState } from "react";

export default function StockChart() {
  const [state, setState] =  useState<string>('phil');

  return <>Hello Kang, My name is {state}</>;
}
