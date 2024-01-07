import '$/user/userDetails.css'

export const UserDetails = () => {
    return (
        <div className={'details-card'}>
            <div className={'details-card-top flex'}>
                <div className={'d-card-img'}>
                    <img src={'https://cdn2.iconfinder.com/data/icons/rcons-users-color/32/boy-512.png'} alt={'user image'}/>
                </div>
                <h1>bapparaj sk</h1>
            </div>
            <div className={'details-card-body'}>
                <ul>
                    <li>
                        <p>Username : <span>Bapparaj sk</span></p>
                        <hr/>
                    </li>
                    <li>
                        <p>About Me : <span>i am a full fullstack Developer</span></p>
                        <hr/>
                    </li>
                    <li>
                        <p>County : <span>india</span></p>
                        <hr/>
                    </li>
                    <li>
                        <p>Student/Professional : <span>Professional</span></p>
                        <hr/>
                    </li>
                </ul>
            </div>
        </div>
    )
}