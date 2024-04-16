'use client';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import FormInput from '../formComponents/formInput';
import { useRouter } from 'next/navigation';

interface formValues {
  title: string;
  year: string;
  lucky: boolean;
}

const SearchMovieForm = () => {
  const router = useRouter();

  const initialValues = {
    title: '',
    year: '',
    lucky: false,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    year: Yup.string()
      .matches(/^[0-9]+$/, 'Numbers only!')
      .max(4, 'Time traveler?'),
  });

  const onSubmit = (values: formValues) => {
    const searchQuery = `${values.title}${values.year && `&y=${values.year}`}`;

    // values.lucky = Searched with "I'm Feeling lucky"
    if (values.lucky) router.push(`details?t=${searchQuery}`);
    else router.push(`search?q=${searchQuery}`);
  };

  return (
    <div className='w-full flex justify-center'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, submitForm, setFieldValue }) => (
          <Form className='w-full max-w-screen-sm px-4'>
            <div className='flex flex-col sm:flex-row'>
              <FormInput
                label='Title'
                name='title'
                type='text'
                className='w-full sm:w-4/5'
                inputClassName='rounded sm:rounded-l-full'
              />
              <FormInput
                label='Year'
                name='year'
                type='text'
                className='w-full sm:w-1/5'
                inputClassName='rounded sm:rounded-r-full'
              />
            </div>
            <div className='flex justify-center gap-4'>
              <button disabled={isSubmitting} type='submit' className='btn'>
                {'Search Movie'}
              </button>
              <button
                disabled={isSubmitting}
                type='button'
                onClick={async () => {
                  await setFieldValue('lucky', true);
                  await submitForm();
                  await setFieldValue('lucky', false);
                }}
                className='btn'
              >
                {"I'm Feeling lucky"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchMovieForm;
