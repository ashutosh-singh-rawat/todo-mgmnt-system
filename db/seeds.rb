superadmin = User.create(email: "superadmin@gmail.com", password: "superadmin", role: "super_admin")

manager = User.create(email: "manager@gmail.com", password: "manager", role: "manager")
manager1 = User.create(email: "manager1@gmail.com", password: "manager1", role: "manager")
manager2 = User.create(email: "manager2@gmail.com", password: "manager2", role: "manager")

developer = User.create(email: "developer@gmail.com", password: "developer", role: "developer")
developer1 = User.create(email: "developer1@gmail.com", password: "developer1", role: "developer")
developer2 = User.create(email: "developer2@gmail.com", password: "developer2", role: "developer")


t1 = Team.create(name: 'ROR')
t2 = Team.create(name: 'Node.js')
t3 = Team.create(name: 'Angular')
t4 = Team.create(name: 'java')
t5 = Team.create(name: 'IOS')
t6 = Team.create(name: 'Android')