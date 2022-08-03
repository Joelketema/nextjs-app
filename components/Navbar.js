import Link from "next/link"

const Navbar = () => {
    
    const user = null
    const userName = null
    
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href={"/"}>
                        <button className="btn-logo"> Feed </button>
                    </Link>
                </li>

                {userName && (
                    <>
                        <li className="push-left">
                            <Link href={"/admin"}>
                               <button className="btn-blue"> Write Posts</button>
                            </Link>
                        </li>

                        <li>
                            <Link href={`${userName}`}>
                                <img src={user?.photoURL} alt="" />
                            </Link>
                        </li>
                    </>
                )}

                {!userName && (
                    <>
                        <li>
                            <Link href={"/enter"}>
                               <button className="btn-blue"> Login</button>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )

}

export default Navbar