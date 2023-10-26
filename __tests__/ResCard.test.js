import { render } from "@testing-library/react"

import { resData } from "../src/mocks/mockData"
 import ReasturantCard from "../src/components/ReasturantCard"
test("Restaurnt card is loaded or not",()=>{

    render(<ReasturantCard resObj={resData} />)
})