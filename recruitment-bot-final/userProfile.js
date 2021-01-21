// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

class UserProfile {
    constructor( name, age, picture, knowledge, experience) {
        this.name = name;
        this.age = age;
        this.picture = picture;
        this.knowledge = knowledge;
        this.experience = experience;
    }
}

module.exports.UserProfile = UserProfile;
