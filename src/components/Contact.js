const Contact =()=>{
    return(
        <div className="m-5 mx-[100px]">
            <h1 className="text-center text-3xl p-3 m-2 font-bold">Contact Us Page</h1>
            <div className="text-center">
                <form>
                <input type="text" placeholder="EnterNmae" className="border border-blue-800 rounded-md my-3 p-1"/><br/>
                <input type="text" placeholder="Message" className="border border-blue-800 rounded-md my-3 p-1"/><br/>
                <button className="border border-blue-800 rounded-md my-3 bg-blue-400 px-3 py-1">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;