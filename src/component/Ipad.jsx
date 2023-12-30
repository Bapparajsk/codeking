import '$/ipad.css'
import List from "#/List";
import {Texts} from "#/Texts";

export const Ipad = () => {
    return (
        <div className={'ipad-base'}>
            <div className={'screen'}>
                <div className={'left'}>
                    <div className={'left-top'}>
                        <div className={'box'}>
                            <lord-icon
                                src="https://cdn.lordicon.com/abwrkdvl.json"
                                trigger="hover"
                                colors="primary:#121331,secondary:#30c9e8"
                                style={{width: "50px", height: "50px"}}>
                            </lord-icon>
                        </div>
                        <div className={'box'}>
                            <lord-icon
                                src="https://cdn.lordicon.com/xirobkro.json"
                                trigger="hover"
                                colors="primary:#121331,secondary:#848484"
                                style={{width: "50px", height: "50px"}}>
                            </lord-icon>
                        </div>
                        <div className={'box'}>
                            <lord-icon
                                src="https://cdn.lordicon.com/gqjpawbc.json"
                                trigger="hover"
                                colors="primary:#121331,secondary:#3080e8"
                                style={{width: "50px", height: "50px"}}>
                            </lord-icon>
                        </div>
                    </div>
                    <div className={'left-bottom'}>
                        <div className={'same-list'}>
                            <List color={'rgba(67, 208, 100, 0.77)'}/>
                            <List color={'rgba(0, 93, 255, 0.77)'}/>
                            <List color={'rgba(208, 159, 67, 0.77)'}/>
                            <List color={'rgba(67, 208, 100, 0.77)'}/>
                            <List color={'rgba(0, 93, 255, 0.77)'}/>
                            <List color={'rgba(208, 159, 67, 0.77)'}/>
                        </div>
                    </div>
                </div>
                <div className={'right'}>
                    <div className={'progress-bar'}>
                        <div className={'right-top'}>
                            <div className={"right-top-box"}>
                                <div className={'top-box-box'}></div>
                                <div className={'cereal-box'}>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/snqonmhs.json"
                                        trigger="loop"
                                        delay="5000"
                                        style={{width: "90px", height: "90px"}}>
                                    </lord-icon>
                                </div>
                                <div className={'top-box-box'}></div>
                            </div>
                        </div>
                        <div className={'right-bottom'}>
                            <Texts w={70}/>
                            <Texts w={40}/>
                            <Texts w={60}/>
                            <Texts w={30}/>
                            <Texts w={60}/>
                            <Texts w={50}/>
                            <Texts w={20}/>
                            <Texts w={30}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}