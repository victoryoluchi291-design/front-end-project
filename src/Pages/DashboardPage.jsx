import React from "react";
import { Wallet, ClipboardList,} from "lucide-react";
import "./DashboardPage.css";

const dashboardPage = () => {

  return (

    <main className="dashboard-page">

      <div className="dashboard-container">

        {/* Welcome Section */}

        <section className="dashboard-welcome">

          <h1>Welcome, Victory! 👋</h1>

          <p>

            <span>0 surveys</span> available for you

          </p>

          <button className="dashboard-dashboard-btn">

            <Wallet size={23} />

            <span>₦0</span>

          </button>

        </section>

        {/* Available Surveys */}

        <section className="dashboard-surveys-card">

          <div className="dashboard-surveys-header">

            <div className="dashboard-surveys-title">

              <ClipboardList size={25} />

              <h2>Available Surveys</h2>

            </div>

            <button className="dashboard-view-all">

              View All

            </button>

          </div>

          {/* Empty State */}

          <div className="dashboard-surveys-empty">

            <ClipboardList

              size={55}

              strokeWidth={1.8}

              className="dashboard-empty-icon"

            />

            <h3>No surveys available right now</h3>

            <p>

              New surveys are matched to your profile as

              they open. Meanwhile, you can keep earning

              with UGC campaigns.

            </p>

          </div>

        </section>

      </div>

    </main>

  );

};

export default dashboardPage;