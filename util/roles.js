class RoleNode {
  constructor(role) {
    this.role = role;
    this.descendants = [];
  }
}

const admin = new RoleNode("Administrator");
const um = new RoleNode("UserManager");
const ka = new RoleNode("KYCApprover");
const sm = new RoleNode("SupportManager");
const wm = new RoleNode("WalletManager");
const fm = new RoleNode("FraudMonitor");
const au = new RoleNode("AppUser");
const wu = new RoleNode("WalletUser");
au.descendants.push(wu);
wm.descendants.push(fm, au);
um.descendants.push(ka, sm);
admin.descendants.push(um, wm);

module.exports = admin;
