import '$/problem/problemSearch.css';
import { useState } from 'react';
import { getTagesName } from '@/lib/templates/template';

export const ProblemSearch = ({ addTagName, removeTagName, containskey }) => {

    const [tages, setTages] = useState([])

    const handleClicks = (name) => {
        console.log(name);
        if (containskey(name)) {
            removeTagName(name);
        } else {
            addTagName(name);
        }
    }

    useState(() => {
        setTages(getTagesName());
    }, [])

    return (
        <div className={"problem-search"}>
            <div className={'problem-search-input-box flex'}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder={'Search for a problem'}/>
            </div>
            <div className={'problem-search-tages'}>
                {
                    tages?.map((item, index) => {
                        return (
                            <span key={index} onClick={() => handleClicks(item)}>
                                {item}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    );
};
