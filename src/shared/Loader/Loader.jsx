import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
        <ThreeDots 
            height="50" 
            width="50" 
            radius="9"
            color="#fff" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{justifyContent: "center"}}
            wrapperClassName=""
            visible={true}
        />
    </>
  )
}