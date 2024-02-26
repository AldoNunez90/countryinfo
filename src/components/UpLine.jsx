import Image from "next/image";



const UpLine = () => {
    return ( <div className="upline">
        <h2 className="up-line__content">Where in the world?</h2>
        <div className="up-line__content select">
            <Image src="/moon.svg" alt="moon" className="moon" width={15} height={15} /> 
            <p>Dark Mode</p>
        </div>
    </div> );
}
 
export default UpLine;