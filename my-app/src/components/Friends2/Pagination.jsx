import Pagination from 'react-bootstrap/Pagination';
import {useEffect, useState} from "react";
import PageItem from 'react-bootstrap/PageItem'
import s from "./friends.module.css";
import userlogo from "../../media/uzerlogo.png";
import {Button} from "react-bootstrap";
import * as React from "react";

const PaginationP = (props) => {

    useEffect(() => {
    })
    const [currentPage, setCurrentPage] = useState(props.page);
    const [tempCurrentPage, setTempCurrentPage] = useState(0);
    let usersLength = props.totalCount
    let numberOfPages = Math.ceil( usersLength / 10)
    let numOfPages = []

    for (let i = 1; i <= numberOfPages; i++) {
        numOfPages.push(i)
    }
    let tempNumOfPages = numOfPages.slice(tempCurrentPage, tempCurrentPage + 10)
    if (currentPage < 1) {
        setCurrentPage(1)
    }
    const arr = tempNumOfPages.map((num) => {
        return <Pagination.Item className={num == props.page ? 'active' : ''}
                                onClick={() => {setCurrentPage(num)
                                    props.getUsersData( 10 ,num, props.searchName, props.friend)}
                                }>{num}</Pagination.Item>
    }) 
    return <div>
        <Pagination size="sm">
            <Pagination.First onClick={() => setTempCurrentPage(0)}/>
            {tempCurrentPage == 0 ? null : <Pagination.Prev onClick={() => setTempCurrentPage(tempCurrentPage - 10)}/>}
            {arr}
            {tempCurrentPage <= (numberOfPages - 11) ?
                <Pagination.Next onClick={() => setTempCurrentPage(tempCurrentPage + 10)}/> : null}
            <Pagination.Last onClick={() => setTempCurrentPage(numberOfPages - 10)}/>
        </Pagination>


    </div>
}

export default PaginationP;
/* <Pagination>
           <Pagination.First />
           <Pagination.Prev />
           <Pagination.Item>{1}</Pagination.Item>
           <Pagination.Ellipsis />
           <Pagination.Item>{10}</Pagination.Item>
           <Pagination.Item>{11}</Pagination.Item>
           <Pagination.Item active>{12}</Pagination.Item>
           <Pagination.Item>{13}</Pagination.Item>
           <Pagination.Item disabled>{14}</Pagination.Item>
           <Pagination.Ellipsis />
           <Pagination.Item>{usersLength}</Pagination.Item>
           <Pagination.Next />
           <Pagination.Last />
       </Pagination>*/