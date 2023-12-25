import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Accordion, Collapse } from 'reactstrap';
import AgeCalculaor from '../../AgeCalculaor';
import CheckBox from '../../checkBox';
import DisplayCount from '../../context/DisplayCount';
import Counter from '../../Counter';
import CrudOperation from '../../CrudOperation';
import DropDown from '../../DropDown';
import DynamicList from '../../DynamicList';

import WithDataFeatching from '../../hoc/WithDataFeatching';
import AutoPopulation from '../../listObjects/AutoPopulation';
import Practice from '../../Practice';
import ProfileCard from '../../ProfileCard';
import ForwardRef from '../../refs/ForwardRef';
import ParentComponent from '../../useCallBack/ParentComponent';
import Books from '../Books';
import CounterPage from '../CounterPage';
import DynamicTable from '../dynamicData/DynamicTable';
import UseMemoHook from '../../useMemo/useMemo';
import ArrayJoin from '../ArrayJoin';
import Checkbox from '../../CheckBoxDelete';
import ParentRef from '../../refs/ParentRef';
import ChaildToParent from '../chaildtoparent/Parent';
import Parent from '../chaildtoparent/Parent';
import Debounce from '../debounce/Debounce';
import FormValidation from '../../formValidation/FormValidation';
import Accordian from '../Accordian';
import UseMemoExample from '../usememowithYT/UseMemoExample';
import TestIsAuthenticatedOrNot from '../../hoc/TestIsAuthenticatedOrNot';
import RegAndLogin from '../../shiva/RegAndLogin';
import PromiseExample from '../PromiseExample';
import AddressCard from '../AddressCard';
import ReactDataGrid from '../datagrid/ReactDataGrid';
import ValidateForm from '../../customHook/ValidateForm';
import Pagination from '../pagination/Pagination';
import Task from '../../Task';
import CounterWithSetInterval from '../CounterWithSetInterval';
import MovieSearch from '../MovieSearch';
import Home from '../employeedatabasemanagement/Home';
import CountdownTimer from '../countdowntimer/CountDownTimer';
const RoutesFile = () => {
    const HocFeatching =  ()=><WithDataFeatching/>
  return (
    <Router>
    <Routes>
        <Route exact path='/practice' element={<Practice/>}/>
        <Route exact path="/hoc" element={<WithDataFeatching/>}/>
        <Route exact path='/counter' element={<Counter/>}/>
        <Route exact path='/profileCard' element={<ProfileCard color={"red"} fontSize={42} border={"2px solid powderblue"}/>}/>
        <Route exact path='/dynamicList' element={<DynamicList/>}/>
        <Route exact path='/crudOperation' element={<CrudOperation/>}/>
        <Route exact path='/checkBox' element={<CheckBox/>}/>
        <Route exact path='/books' element={<Books/>}/>
        <Route exact path="/ageCalcultor" element={<AgeCalculaor/>}/>
        <Route exact path="/collapse" element={<Collapse/>}/>
        <Route exact path='/counterPage' element={<CounterPage/>}/>
        <Route exact path='/forwwardRef' element={<ForwardRef/>}/>
        <Route exact path='/dropDown' element={<DropDown/>}/>
        <Route exact path="/autoPopulation" element={<AutoPopulation/>}/>
        <Route exact path="/displayCount" element={<DisplayCount/>}/>
        <Route exact path='/callBack' element={<ParentComponent/>}/>
        <Route exact path='/table' element={<DynamicTable/>}/>
        <Route exact path='/useMemo' element={<UseMemoHook/>}/>
        <Route exact path='/arrayJoin' element={<ArrayJoin/>}/>
        <Route exact path="/checkboxDelete" element={<Checkbox/>}/>
        <Route exact path="/implementForwardRef" element={<ParentRef/>}/>
        <Route exact path="/chaildToParent" element={<Parent/>}/>
        <Route exact path='/debounce' element={<Debounce/>}/>
        <Route exact path="/formValidation" element={<FormValidation/>}/>
        <Route exact path="/accordian" element={<Accordian/>}/>
        {/* <Route exact path='/useCallBack' element={<UseCallBack/>}/> */}
        <Route exact path="/useMemoExample" element={<UseMemoExample/>}/>
        <Route exact path="/isAuthenticate" element={<TestIsAuthenticatedOrNot/>}/>
        <Route exact path="/regAndLogin" element={<RegAndLogin/>}/>
        <Route exact path='/promise' element={<PromiseExample/>}/>
        <Route exact path='/addressCard' element={<AddressCard/>}/>
        <Route exact path="/dataGrid" element={<ReactDataGrid/>}/>
        <Route exact path='/validateForm' element={<ValidateForm/>}/>
        <Route exact path='/pagination' element={<Pagination/>}/>
        <Route exact path ="/task" element={<Task/>}/>
        <Route exact path="/counterWithSetInterval" element={<CounterWithSetInterval/>}/>
        <Route exact path="/movieSearch" element={<MovieSearch/>}/>
        <Route exact path="/employeeManagement" element={<Home/>}/>
        <Route exact path='/countDown' element={<CountdownTimer/>}/>
    </Routes>
    </Router>
  )
}

export default RoutesFile