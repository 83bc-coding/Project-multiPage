import { useState, useEffect, createContext } from "react";
export let SelectPlanContext = createContext();

function SelectPlanProvider({ children }) {
  const [plansOption, setPlansOption] = useState({
    plan: "Arcade",
    planType: false,
    isLargerStorage: false,
    isCustomizableProfile: false,
    isOnlineService: true,
  });

  console.log("plan option", plansOption);


  const plan = () => {
    return (plansOption.plan )
   };
  const isLargerStorage = () => {
    return plansOption.isLargerStorage 
   };
  const isCustomizableProfile = () => {
    return plansOption.isCustomizableProfile 
   };
  const isOnlineService = () => {
    return plansOption.isOnlineService 
   };


  function changePlan  (newPlan)  {
    setPlansOption((pre) => ({ ...pre, plan: newPlan }));
  };
  const planType = () => {
    return plansOption.planType 
   };
  const changePlanisCustomizableProfile = (newPlan) => {
    setPlansOption((pre) => ({
      ...pre,
      isCustomizableProfile: !pre.isCustomizableProfile,
    }));
  };
  function changePlanType  (e)  {
    setPlansOption((pre) => ({ ...pre, planType: !pre.planType }));
  };
  const changePlanisLargerStorage = () => {
    setPlansOption((pre) => ({
      ...pre,
      isLargerStorage: !pre.isLargerStorage,
    }));
  };
  const changePlanisOnlineService = () => {
    setPlansOption((pre) => ({
      ...pre,
      isOnlineService: !pre.isOnlineService,
    }));
  };

  useEffect(() => {
console.log('effect plan selec',plansOption)  }, []);

  return (
    <SelectPlanContext.Provider
      value={{
        plansOption,
        setPlansOption,
        changePlan,
        changePlanType,
        changePlanisOnlineService,
        changePlanisLargerStorage,
        changePlanisCustomizableProfile,
        planType,
        plan,
        isOnlineService,
        isCustomizableProfile,
        isLargerStorage
      }}
    >
      {children}
    </SelectPlanContext.Provider>
  );
}

export default SelectPlanProvider;
