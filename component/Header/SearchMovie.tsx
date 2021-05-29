import React from 'react'
import {Field, Form, Formik} from 'formik';


function trim(str: any, ch: any) {
    var start = 0,
        end = str.length;

    while(start < end && str[start] === ch)
        ++start;

    while(end > start && str[end - 1] === ch)
        --end;

    return (start > 0 || end < str.length) ? str.substring(start, end) : str;
}
type SearchMoviePropsType = {
    SearchText: (text: string) => void
    searchMovie: (text: string) => void
    text: string
}
const SearchMovie = React.memo((props: SearchMoviePropsType) => {
    let timeout: any;
    const onChange = (text :any) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            props.searchMovie(text)

        }, 300);
    };
    let submit = (values:any, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        let searchTextCut = trim(JSON.stringify(String(values.searchText)), '"')
        props.searchMovie(searchTextCut)
        setSubmitting(false)
    }
    //useDebouncedSearch(submit)
  return (<>
        <div className="nav col-lg-5 ml-auto ">
            <nav>
                <ul className="nav__items d-flex justify-content-center ">

                    <div className="divse col-lg-12 col-sm-12">
                        <Formik
                            initialValues={{searchText: null as null | string}}
                            validate={()=>({})}
                            onSubmit={submit}

                        >
                            {({isSubmitting}) => (
                                <Form>
                                    <Field type="text" name="searchText" onChange={(e:any)=>{onChange(e.target.value)}}/>

                                </Form>
                            )}
                        </Formik>


                    </div>
                </ul>
            </nav>
        </div>
    </>)
})
export default SearchMovie