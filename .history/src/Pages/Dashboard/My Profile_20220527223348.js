import React from 'react';

const MyProfile = () => {
    return (
        <div>
            <h1>Hello Admin</h1>

            app.put('/api/users/profile', verifyUser, async (req, res) => {
            const data = req.body;
            const filter = { email: data.email };
            const options = { upsert: true };
            const updateDoc = {
                $set: data,
            }
            const result = await profile.updateOne(filter, updateDoc, options);
            res.send(result);
        })
        </div>
    );
};

export default MyProfile;