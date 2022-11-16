import { observer } from "mobx-react-lite"
import React, { useContext } from "react"
import { Context } from "./../index"
import { Pagination } from "@mui/material"
import { PaginationItem } from "@mui/material"
const Pages = observer(() => {
    const { photo } = useContext(Context)
    const pageCount = Math.ceil(photo.totalCount / photo.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    return (
        <Pagination className='mt-5'>
            {pages.map((page) => (
                <PaginationItem
                    key={page}
                    page={pageCount}
                    selected={photo.page === page}
                    onClick={() => photo.setPage(page)}
                >
                    {page}
                </PaginationItem>
            ))}
        </Pagination>
    )
})

export default Pages
