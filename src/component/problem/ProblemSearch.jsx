import '$/problem/problemSearch.css';
import { useState } from 'react';
import { getTagesName, searchTagesName } from '@/lib/templates/template';

export const ProblemSearch = ({ addTagName, removeTagName, containskey, tagNames }) => {

    const [tages, setTages] = useState([])
    const [searchTagName, setSearchTagName] = useState('')

    const handleClicks = (name) => {
        if (containskey(name)) {
            removeTagName(name);
        } else {
            addTagName(name);
        }
    }

    const handleCheng = (e) => {
        let value = e.target.value;
        if(value === '') {
            setTages(getTagesName());
        }
        setSearchTagName(value);
        setTages(searchTagesName(value));
    }

    useState(() => {
        setTages(getTagesName());
    }, [])

    return (
        <div className={"problem-search"}>
            <div className={'problem-search-input-box flex'}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder={'Search for a problem'} value={searchTagName} onChange={handleCheng}/>
            </div>
            <div className={'problem-search-tages'}>
                {
                    tages?.map((item, index) => {
                        return (
                            <span
                                style={{ backgroundColor: `#${ tagNames[item] ? '1f84cc' : '515067' }` }}
                                key={index}
                                onClick={() => handleClicks(item)}
                            >
                                {item}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    );
};
