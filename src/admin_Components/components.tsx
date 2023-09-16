

import BasicButtons from './components/TSButton';
import BasicDatepicker from './components/TSDatePicker';
import BasicSelect from './components/TSSelect';
import BasicSwitches from './components/TSSwitch';
import BasicTable from './components/TSTable';
import IconsButtons from './components/TSIconButton';
import BasicTextFields from './components/TSInput';
import AbcSharpIcon from '@mui/icons-material/AbcSharp';
import AccessAlarmSharpIcon from '@mui/icons-material/AccessAlarmSharp';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import AdUnitsSharpIcon from '@mui/icons-material/AdUnitsSharp';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import TSNavbar from '../Pages/TSNavbar';

export default function AllComponents() {
  let arrOfTable = [
    {
      name: "Adil",
      id: 1,
      age: 17,
      isActive: "Yes",
      category: "ABC",
      fieldSet: <input className='rounded p-2' placeholder='Enter Your Message ' />,
    },
    {
      name: "Haseeb",
      id: 2,
      age: 16,
      isActive: "No",
      category: "DEF",
      fieldSet: <input className='rounded p-2' placeholder='Enter Your Message ' />,
    },
    {
      name: "Raheem",
      id: 3,
      age: 13,
      isActive: "No",
      category: "GHI",
      fieldSet: <input className='rounded p-2' placeholder='Enter Your Message ' />,
    },
    {
      name: "Shakoor",
      id: 4,
      age: 12,
      isActive: "No",
      category: "JKL",
      fieldSet: <input className='rounded p-2' placeholder='Enter Your Message ' />,
    },
    {
      name: "Mannan",
      id: 5,
      age: 5,
      isActive: "Yes",
      category: "mno",
      fieldSet: <input className='rounded p-2' placeholder='Enter Your Message ' />,
    },
    {
      name: "Ali",
      id: 6,
      age: 17,
      isActive: "No",
      category: "XYZ",
      fieldSet: <input className='rounded p-2' placeholder='Enter Your Message ' />,
    },
  ]
  return (
    <div className="App">
      <TSNavbar/>
      <h1 className='mt-5 mb-2 text-primary'>COMPONENTS</h1>
        <BasicButtons btnvalue='Adil' btnclick={() => alert("Adil")}/>
        <BasicButtons btnvalue='Haseeb' btnclick={() => alert("Haseeb")}/>
        <BasicButtons btnvalue='Raheem' btnclick={() => alert('Raheem')}/>
        <BasicButtons btnvalue='Shakoor' btnclick={() => alert('Shakoor')}/>
        <BasicButtons btnvalue='Mannan' btnclick={() => alert('Mannan')}/>
        <div>
        <IconsButtons iconposition={<AbcSharpIcon/>} iconvalue='ABC' iconclick={() => alert("ABC ICON")}/>
        <IconsButtons iconposition={<AccessAlarmSharpIcon/>} iconvalue='Alaram' iconclick={() => alert("ALARAM ICON")}/>
        <IconsButtons iconposition={<AccountBalanceSharpIcon/>} iconvalue='Account' iconclick={() => alert("ACCOUNT ICON")}/>
        <IconsButtons iconposition={<AdUnitsSharpIcon/>} iconvalue='Units' iconclick={() => alert("UNITS ICON")}/>
        <IconsButtons iconposition={<AddBoxSharpIcon/>} iconvalue='AddBox' iconclick={() => alert("ADDBOX ICON")}/>
        </div>
        <div>
         <BasicSwitches Check = {false} able = {false}/>
         <BasicSwitches Check  able = {false}/>
         <BasicSwitches Check = {false} able />
         <BasicSwitches Check able />
        </div>
        <div className='mt-5'>
          <BasicTextFields inpChange={() => alert("It's type is text ")} inptype='text' inpLabel='TEXT'/>
          <BasicTextFields inpChange={() => alert("It's type is number '123'")} inptype='number' inpLabel='NUMBER'/>
          <BasicTextFields inpChange={() => alert("It's type is password ")} inptype='password' inpLabel='PASSWORD'/>
          <BasicTextFields inpChange={() => alert("It's type is email ")} inptype='email' inpLabel='EMAIL'/>
          <BasicTextFields inpChange={() => alert("It's type is name ")} inptype='name' inpLabel='NAME'/>
          <BasicDatepicker dateChange={() => alert("It's type is date")} datetype='date'/>
        </div>
        <BasicSelect options={[

{
  value: "Samsung",
  displayName: "Samsung"
},
{
  value: "Vivo",
  displayName: "Vivo"
},
{
  value: "Infinix",
  displayName: "Infinix"
},
{
  value: "IPhone",
  displayName: "IPhone"
},
{
  value: "Oppo",
  displayName: "Oppo"
},
]}
getValue={(e: any) => { alert(e) }} />

        <BasicTable dataSource={arrOfTable} cols={[
        {
          heading: "NAME",
          key: "name"
        },
        {
          heading: "ID",
          key: "id"
        },
        {
          heading: "AGE",
          key: "age"
        },
        {
          heading: "ISACTIVE",
          key: "isActive"
        },
        {
          heading: "CATEGORY",
          key: "category"
        },
        {
          heading: "FIELD SET",
          key: "fieldSet"
        },
      ]} />
    </div>
  );
}