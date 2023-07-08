import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react'
import { PekerjaForm } from './Partials/PekerjaForm';
import { CustomerCard } from '@/Components/CustomerCard';


const DetailUserBarangService = ({userBarangServices, auth }) => {
   console.log(userBarangServices);
  return (
    <AuthenticatedLayout>
        <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-gray-800 shadow sm:rounded-lg">
                    <div className='text-gray-100'>
                        <CustomerCard customers={userBarangServices.barangservices[0].customers} />
                    </div>
                    </div>
                    <div className="p-4 sm:p-8 bg-gray-800 shadow sm:rounded-lg">
                        {/* <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        /> */}
                    </div>

                    <div className="p-4 sm:p-8 bg-gray-800 shadow sm:rounded-lg">
                        {/* <UpdatePasswordForm className="max-w-xl" /> */}
                    </div>

                    <div className="p-4 sm:p-8 bg-gray-800 shadow sm:rounded-lg">
                        {/* <DeleteUserForm className="max-w-xl" /> */}
                    </div>
                </div>
            </div>
    </AuthenticatedLayout>
  )
}

export default DetailUserBarangService