superadmin = User.create!(email: "superadmin@gmail.com", password: "superadmin", role: "super_admin")

manager = User.create!(email: "manager@gmail.com", password: "manager", role: "manager")
manager1 = User.create!(email: "manager1@gmail.com", password: "manager1", role: "manager")
manager2 = User.create!(email: "manager2@gmail.com", password: "manager2", role: "manager")


t1 = Team.create!(name: 'ROR', user_id: manager.id)
t2 = Team.create!(name: 'Node.js')
t3 = Team.create!(name: 'Angular')
t4 = Team.create!(name: 'java')
t5 = Team.create!(name: 'IOS')
t6 = Team.create!(name: 'Android')

p1 = Project.create!(name: 'Project 1', team_id: t1.id)
p2 = Project.create!(name: 'Project 2', team_id: t1.id)
p3 = Project.create!(name: 'Project 3', team_id: t1.id)
p4 = Project.create!(name: 'Project 4', team_id: t1.id)
p5 = Project.create!(name: 'Project 5', team_id: t1.id)
p6 = Project.create!(name: 'Project 6', team_id: t1.id)
p7 = Project.create!(name: 'Project 7', team_id: t2.id)
p8 = Project.create!(name: 'Project 8', team_id: t2.id)

developer = User.create!(email: "developer@gmail.com", password: "developer", role: "developer", team_id: t1.id)
developer1 = User.create!(email: "developer1@gmail.com", password: "developer1", role: "developer", team_id: t1.id)
developer2 = User.create!(email: "developer2@gmail.com", password: "developer2", role: "developer", team_id: t1.id)

dp1 = DeveloperProject.create!(project_id: p1.id, user_id: developer.id)
dp2 = DeveloperProject.create!(project_id: p1.id, user_id: developer1.id)
dp3 = DeveloperProject.create!(project_id: p1.id, user_id: developer2.id)

todo1 = Todo.create!(name: "Todo1", user_id: developer.id , project_id: p1.id)
todo2 = Todo.create!(name: "Todo2", user_id: developer.id , project_id: p1.id)
todo3 = Todo.create!(name: "Todo1", project_id: p2.id)
todo4 = Todo.create!(name: "Todo2", project_id: p2.id)
todo5 = Todo.create!(name: "Todo3", project_id: p2.id)
todo6 = Todo.create!(name: "Todo4", project_id: p2.id)