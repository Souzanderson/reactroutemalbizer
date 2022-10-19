import { NavigationRouter } from "../../services/router/router.service";
import "./pageone.style.css";

export const PageOneComponent = () => {

  const handlerClickButton = (e: any) => NavigationRouter.go("pagetwo");

  return (
    <div id="pageonesection">
      <h1>This is Page 1</h1>
      <br />
      <br />
      <br />
      <br />
      <div className="button" onClick={handlerClickButton}>Go To Page 2</div>
    </div>
  );
};
