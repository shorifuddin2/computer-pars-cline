import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';



const EditProfile = () => {
    const [user, loading] = useAuthState(auth)
    const {
        register,
        handleSubmit, reset
    } = useForm();



    if (loading) {
        return <Loading />
    }



    const imageStorageKey = '8c0a9913c88db4043222ef9e72b3c378';

    const handleEditProfile = async data => {
        const image = data.avatar[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${ imageStorageKey }`
        fetch(url, {
            method: 'POST',
            body: formData,
        }).then(res => res.json()).then(result => {
            if (result.success) {
                const img = result.data.url;
                const userProfile = {
                    name: user?.displayName,
                    email: user?.email,
                    phone: data.number,
                    address: data.location,
                    bio: data.bio,
                    education: data.education,
                    linkedIn: data.LinkedIn,
                    github: data.github,
                    avatar: img,
                }
                fetch('https://ancient-bastion-87117.herokuapp.com/api/users/profile', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${ localStorage.getItem("accessToken") }`
                    },
                    body: JSON.stringify(userProfile),
                }).then(res => {
                    if (res.status === 401 || res.status === 403) {
                        return toast.error('You are not authorized to perform this action');
                    } else {
                        return res.json();

                    }
                }).then(result => { toast.info('Profile Updated'); reset() });
            }
        })



    }


    return (
        <div>

            <div className=" my-14 w-4/5 mx-auto rounded-xl shadow-2xl bg-base-100">
                <h3 className='text-center text-3xl font-bold pt-5'>Update your profile</h3>
                <form className='flex w-4/5 mx-auto' onSubmit={handleSubmit(handleEditProfile)} >
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder={user?.displayName} className="input input-bordered" disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder={user?.email} className="input input-bordered" disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" {...register('number', {
                                required: {
                                    value: true,
                                    message: 'number is Required'
                                }
                            })} placeholder='+8801723635487' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">location</span>
                            </label>
                            <input type="text" {...register('location', {
                                required: {
                                    value: true,
                                    message: 'location is Required'
                                }
                            })} name='location' placeholder='Dhaka, Bangladesh' className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Bio</span>
                            </label>
                            <textarea {...register('bio', {
                                required: {
                                    value: true,
                                    message: 'bio is Required'
                                }
                            })} className="input input-bordered" name="bio" id="bio" cols="30" rows="10"></textarea>

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Education</span>
                            </label>
                            <input type="text" {...register('education', {
                                required: {
                                    value: true,
                                    message: 'education is Required'
                                }
                            })} name='education' placeholder='MERN-STACK at Programming Hero' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">LinkedIn</span>
                            </label>
                            <input type="text" {...register('LinkedIn', {
                                required: {
                                    value: true,
                                    message: 'LinkedIn is Required'
                                }
                            })} name='LinkedIn' placeholder='https://www.linkedin.com/in/golam-mostofa-rajon-8906781b1/' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Github</span>
                            </label>
                            <input type="text" {...register('github', {
                                required: {
                                    value: true,
                                    message: 'github is Required'
                                }
                            })} name='github' placeholder='https://github.com/rajon111/' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Upload Avatar</span>
                            </label>
                            <input type="file" {...register('avatar', {
                                required: {
                                    value: true,
                                    message: 'avatar is Required'
                                }
                            })} name='avatar' className="input input-bordered py-2" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Profile</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;