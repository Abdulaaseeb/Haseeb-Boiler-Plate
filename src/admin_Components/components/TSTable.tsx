import { table } from "console"

type tableProps = {
    dataSource:any[],
    cols:any[]
}

function BasicTable(props : tableProps){
    const{dataSource,cols} = props
    return(
        <table className="table table-primary table-striped  mt-5">
            <thead>
                <tr>
               {cols.map((x,i) => {
                return(
                    <th >{x.heading}</th>
                )
               })}
               </tr>
            </thead>
            <tbody>
                {dataSource.map((x,i) => {
                    return(
                        <tr>
                            {cols.map((y,j) => {
                                return(
                                    <td key={j}>{x[y.key]}</td>
                                )
                            })}
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    )
}

export default BasicTable