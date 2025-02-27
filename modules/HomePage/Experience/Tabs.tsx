import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store";
import { setActiveTab } from "@/app/redux/slices/tabSlice";

interface TabsProps {
  index: number;
}

export default function Tabs({ index }: TabsProps) {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.tabs.activeTabs[index] || "description");

  return (
    <div>
      <button
        className={activeTab === "Technologies" ? "underline" : ""}
        onClick={() => dispatch(setActiveTab({ index, tab: "Technologies" }))}
      >
        Technologies
      </button>
      <button
        className={activeTab === "Responsibilities" ? "underline" : ""}
        onClick={() => dispatch(setActiveTab({ index, tab: "Responsibilities" }))}
      >
        Responsibilities
      </button>
    </div>
  );
}
