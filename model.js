class RoomClass {
    constructor(id, name, seats, phoneNo, floor, buildingId, features) {
        this.id = id;
        this.name = name;
        this.seats = seats;
        this.phoneNo = phoneNo;
        this.floor = floor;
        this.buildingId = buildingId;
        this.features = features;
    }
}

class MeetingClass {
    constructor(id, name, date, slotFrom, slotTo, roomId, userId) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.slotFrom = slotFrom;
        this.slotTo = slotTo;
        this.roomId = roomId;
        this.userId = userId;
    }
}

class UserClass {
    constructor(id, emailId, firstName, lastName, mobile) {
        this.id = id;
        this.emailId = emailId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
    }
}

module.exports = { RoomClass, MeetingClass, UserClass };