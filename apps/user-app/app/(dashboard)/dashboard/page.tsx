export default function DashboardPage() {
    return (
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Total Balance Card */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
                <h3 className="text-sm font-medium">Total Balance</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                  <path d="M18 12H9"></path>
                </svg>
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">₹5,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </div>
            </div>
  
            {/* Sent Card */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
                <h3 className="text-sm font-medium">Sent</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="m5 12 7-7 7 7"></path>
                  <path d="M12 19V5"></path>
                </svg>
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">
                ₹2,350.45</div>
                <p className="text-xs text-muted-foreground">+10.1% from last month</p>
              </div>
            </div>
  
            {/* Received Card */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
                <h3 className="text-sm font-medium">Received</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 5v14"></path>
                  <path d="m19 12-7 7-7-7"></path>
                </svg>
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">₹3,456.78</div>
                <p className="text-xs text-muted-foreground">+35.2% from last month</p>
              </div>
            </div>
  
            {/* Active Users Card */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
                <h3 className="text-sm font-medium">Active Users</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">+201 since last hour</p>
              </div>
            </div>
          </div>
  
          {/* Welcome and Quick Actions */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Welcome Card */}
            <div className="col-span-4 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">Welcome to XPay</h3>
                <p className="text-sm text-muted-foreground">
                  Your all-in-one digital payment solution for fast, secure P2P transfers and payments.
                </p>
              </div>
              <div className="p-6 pt-0 pl-2">
                <div className="flex flex-col gap-8">
                  <div>
                    <div className="mb-4 flex items-center">
                      <div className="text-xl font-bold">Monthly Overview</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2 h-4 w-4 text-muted-foreground"
                      >
                        <path d="M3 3v18h18"></path>
                        <path d="m19 9-5 5-4-4-3 3"></path>
                      </svg>
                    </div>
                    <div className="space-y-4">
                      {/* Spending Limit Progress */}
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center">
                            <div className="font-medium">Spending Limit</div>
                          </div>
                          <div>₹8,000 / ₹10,000</div>
                        </div>
                        <div className="relative h-2 w-full overflow-hidden rounded-full bg-primary/20">
                          <div className="h-full w-[80%] bg-primary"></div>
                        </div>
                      </div>
                      {/* Savings Goal Progress */}
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center">
                            <div className="font-medium">Savings Goal</div>
                          </div>
                          <div>₹3,200 / ₹5,000</div>
                        </div>
                        <div className="relative h-2 w-full overflow-hidden rounded-full bg-primary/20">
                          <div className="h-full w-[64%] bg-primary"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Quick Actions Card */}
            <div className="col-span-3 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">Quick Actions</h3>
                <p className="text-sm text-muted-foreground">
                  Transfer money, pay bills, and more with just a few clicks.
                </p>
              </div>
              <div className="p-6 pt-0 grid gap-6">
                <div className="grid grid-cols-3 gap-4">
                  {/* Send Button */}
                  <button className="inline-flex h-24 w-full flex-col items-center justify-center gap-1 rounded-xl bg-primary text-primary-foreground shadow hover:bg-primary/90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z"></path>
                      <path d="M22 2 11 13"></path>
                    </svg>
                    <span className="text-xs">Send</span>
                  </button>
  
                  {/* Receive Button */}
                  <button className="inline-flex h-24 w-full flex-col items-center justify-center gap-1 rounded-xl border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                    <span className="text-xs">Receive</span>
                  </button>
  
                  {/* Pay Button */}
                  <button className="inline-flex h-24 w-full flex-col items-center justify-center gap-1 rounded-xl border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                      <line x1="2" x2="22" y1="10" y2="10"></line>
                    </svg>
                    <span className="text-xs">Pay</span>
                  </button>
  
                  {/* Top Up Button */}
                  <button className="inline-flex h-24 w-full flex-col items-center justify-center gap-1 rounded-xl border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    <span className="text-xs">Top Up</span>
                  </button>
  
                  {/* Withdraw Button */}
                  <button className="inline-flex h-24 w-full flex-col items-center justify-center gap-1 rounded-xl border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                      <path d="M12 18V6"></path>
                    </svg>
                    <span className="text-xs">Withdraw</span>
                  </button>
  
                  {/* Friends Button */}
                  <button className="inline-flex h-24 w-full flex-col items-center justify-center gap-1 rounded-xl border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span className="text-xs">Friends</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Recent Transactions */}
          <div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">Recent Transactions</h3>
                <p className="text-sm text-muted-foreground">You made 13 transactions this month.</p>
              </div>
              <div className="p-6 pt-0">
                {/* Tabs */}
                <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground mb-4">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm bg-background text-foreground shadow-sm">
                    All
                  </button>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                    Sent
                  </button>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                    Received
                  </button>
                </div>
  
                {/* Transactions List */}
                <div className="space-y-4">
                  {/* Transaction 1 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-primary"
                        >
                          <path d="m5 12 7-7 7 7"></path>
                          <path d="M12 19V5"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Sent to John Doe</div>
                        <div className="text-sm text-muted-foreground">Today at 2:45 PM</div>
                      </div>
                    </div>
                    <div className="font-medium text-red-500">-₹150.00</div>
                  </div>
  
                  {/* Transaction 2 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-green-500/10 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-green-500"
                        >
                          <path d="M12 5v14"></path>
                          <path d="m19 12-7 7-7-7"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Received from Sarah Smith</div>
                        <div className="text-sm text-muted-foreground">Yesterday at 10:30 AM</div>
                      </div>
                    </div>
                    <div className="font-medium text-green-500">+₹250.00</div>
                  </div>
  
                  {/* Transaction 3 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-primary"
                        >
                          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                          <line x1="2" x2="22" y1="10" y2="10"></line>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Netflix Subscription</div>
                        <div className="text-sm text-muted-foreground">Apr 12, 2025</div>
                      </div>
                    </div>
                    <div className="font-medium text-red-500">-₹14.99</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-6 pt-0">
                <a
                  href="#"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
                >
                  <span>View All Transactions</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
