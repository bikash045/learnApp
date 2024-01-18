import "./Bigadd.css";
const Bigadd = () => {

    const desing = (
        <>
            <div className="video-box">
                <video width="100%" autoPlay muted loop>
                    <source src="meeting.mp4" ></source>
                </video>
                <div className="overlay d-flex justify-content-center align-items-center">
                    <div>
                        <h2 className="text-light">Introducing</h2>
                        <h2 className="text-light">By Mohan</h2>
                        <button className="btn btn-primary py-2 px-4 mt-4">Learn more</button>
                    </div>
                </div>
            </div>
        </>
    );
    return desing;
}

export default Bigadd;