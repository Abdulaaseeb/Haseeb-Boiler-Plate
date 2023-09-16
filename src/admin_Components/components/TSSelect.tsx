import  InputLabel  from "@mui/material"

type selectType = {
  options:any[],
  getValue : any,
}

export default function BasicSelect(selectProps:selectType){
  const {options,getValue,} = selectProps
let changeVal = (val:any)=>{
    getValue(val)
  }
  return(
    <div>
      <select className='w-25  p-4 border rounded' onChange={(e) => changeVal(e.target.value)}>
        {options.map((x,i) => {
          return(
            <option className="" key={i} value={x.value}>{x.displayName}</option>
          )
        })}
      </select>
    </div>
  )
}
