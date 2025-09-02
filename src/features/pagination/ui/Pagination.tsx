import { useEffect, useState } from "react"
import { usePagination } from "../model/usePagination"
import { Colors } from "@/shared/constans/Colors"
import ForwardArrow from "@/shared/ui/Icons/ForwardArrow"
import BackArrow from "@/shared/ui/Icons/BackArrow"

export const Pagination = () => {
    const { currentPage, setCurrentPage, pages } = usePagination()
    const [currentPageArray, setCurrentPageArray] = useState<number[]>([])

    const arrayFromPages = (pages: number, start: number, end: number) => {
        return Array.from({ length: pages }).map((_, index) => index + 1).slice(start, end)
    }

    useEffect(() => {
        if (!currentPageArray.includes(currentPage)) {
            if (arrayFromPages(pages, 0, 3).includes(currentPage - 1)) {
                setCurrentPageArray(arrayFromPages(pages, 0, 5))
            }
            else if (arrayFromPages(pages, pages - 3, pages).includes(currentPage - 1)) {
                setCurrentPageArray(arrayFromPages(pages, pages - 5, pages))
            }
            else {
                setCurrentPageArray(arrayFromPages(pages, currentPage - 3, currentPage + 2))
            }
        }
        if (currentPage === currentPageArray.at(-1)) {
            if (currentPage > pages - 5) {
                setCurrentPageArray(arrayFromPages(pages, pages - 5, pages))
            }
            else {
               setCurrentPageArray(arrayFromPages(pages, currentPage - 3, currentPage + 2))
            }
        }
        if (currentPage === currentPageArray[0] || currentPage === 1) {
            if (currentPage < 6) {
                setCurrentPageArray([1, 2, 3, 4, 5])
            }
            else {
                setCurrentPageArray(arrayFromPages(pages, currentPage - 3, currentPage + 2))
            }
        } 
    }, [currentPage, pages])


    const handlerNextPage = () => {
        if (currentPage !== pages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlerPrevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    return (
        <>
            <div style={{
                display: 'flex',
                cursor: 'pointer', 
                gap: 10,
                textAlign: "center",
                marginTop: 20
            }}>
                <div onClick={() => handlerPrevPage()}><BackArrow color={currentPage === 1 ? Colors.TextCard : Colors.MainYeahub} /></div>
                
                {currentPageArray.includes(1) ?
                    (
                        pages <= 6 ? 
                            (
                                <div style={{
                                    display: "flex",
                                    gap: 6
                                }}>
                                    {Array.from({ length: pages }).map((_, ind) => (
                                        <span style={{color: currentPage === ind + 1 ? Colors.MainYeahub : 'black'}} key={ind + 1} onClick={() => setCurrentPage(ind + 1)}>{ind + 1}</span>
                                    ))}
                                </div>
                            )
                            : 
                            (
                                <div style={{
                                    display: "flex",
                                    gap: 6
                                }}>
                                    {currentPageArray.map(item => (
                                        <span style={{color: currentPage === item ? Colors.MainYeahub : 'black'}} key={item} onClick={() => setCurrentPage(item)}>{item}</span>
                                    ))}...<span style={{color: currentPage === pages ? Colors.MainYeahub : 'black'}} onClick={() => setCurrentPage(pages)}>{pages}</span>
                                </div>
                            )
                    ) 
                    : 
                    (currentPageArray.includes(pages) ? 
                        (
                            <div style={{
                                display: "flex",
                                gap: 4
                            }}>
                                <span style={{color: currentPage === 1 ? Colors.MainYeahub : 'black'}} onClick={() => setCurrentPage(1)}>1</span>...{currentPageArray.map(item => (
                                    <span style={{color: currentPage === item ? Colors.MainYeahub : 'black'}} key={item} onClick={() => setCurrentPage(item)}>{item}</span>
                                ))}
                            </div>
                        ) 
                        : 
                        (
                            <div style={{
                                display: "flex",
                                gap: 6
                            }}>
                                <span style={{color: currentPage === 1 ? Colors.MainYeahub : 'black'}} onClick={() => setCurrentPage(1)}>1</span>...{currentPageArray.map(item => (
                                    <span style={{color: currentPage === item ? Colors.MainYeahub : 'black'}} key={item} onClick={() => setCurrentPage(item)}>{item}</span>
                                ))}...<span style={{color: currentPage === pages ? Colors.MainYeahub : 'black'}} onClick={() => setCurrentPage(pages)}>{pages}</span>
                            </div>
                        )
                    )
                }
                <div onClick={() => handlerNextPage()}><ForwardArrow color={currentPage === pages ? Colors.TextCard : Colors.MainYeahub} /></div>
            </div>
        </>
    )
}