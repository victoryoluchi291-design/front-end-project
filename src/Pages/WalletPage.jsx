import React from "react";

import { Wallet as WalletIcon, TrendingDown,TrendingUp, ArrowUpRight, ArrowDownRight,
 Building2, Banknote,

} from "lucide-react";

import "./WalletPage.css";

const Wallet = () => {

  return (

    <main className="wallet-page">

      <div className="wallet-container">

        {/* Page Description */}

        <p className="wallet-description">

          Manage your earnings and withdrawals

        </p>

        {/* Available Balance */}

        <section className="wallet-balance-card">

          <div className="wallet-card-heading">

            <div className="wallet-icon-box balance-icon">

              <WalletIcon size={30} />

            </div>

            <span>Available Balance</span>

          </div>

          <h1 className="wallet-balance">₦0</h1>

          <button className="wallet-withdraw-btn">

            Withdraw

            <ArrowUpRight size={20} />

          </button>

        </section>

        {/* Total Earned */}

        <section className="wallet-stat-card">

          <div className="wallet-card-heading">

            <div className="wallet-icon-box earned-icon">

              <ArrowDownRight size={28} />

            </div>

            <span>Total Earned</span>

          </div>

          <h2 className="wallet-stat-amount earned-amount">

            ₦0

          </h2>

        </section>

        {/* Total Withdrawn */}

        <section className="wallet-stat-card">

          <div className="wallet-card-heading">

            <div className="wallet-icon-box withdrawn-icon">

              <ArrowUpRight size={28} />

            </div>

            <span>Total Withdrawn</span>

          </div>

          <h2 className="wallet-stat-amount">

            ₦0

          </h2>

        </section>

        {/* Transaction History */}

        <section className="wallet-section-card">

          <h3>Transaction History</h3>

          <p className="wallet-section-subtitle">

            Your recent earnings and withdrawals

          </p>

          <div className="wallet-empty-transactions">

            No transactions yet. Your earnings and

            withdrawals will appear here.

          </div>

        </section>

        {/* Withdrawals */}

        <section className="wallet-section-card withdrawals-card">

          <div className="withdrawals-heading">

            <Banknote size={27} className="withdrawals-icon" />

            <h3>Withdrawals</h3>

          </div>

          <p className="withdrawals-description">

            Add a bank account to enable withdrawals.

            <br />

            Min ₦1,000 · Max ₦500,000 per transfer

          </p>

          <button className="add-bank-btn">

            <Building2 size={24} />

            Add bank account

          </button>

          <p className="withdrawals-empty">

            No withdrawals yet. Earnings live in your

            wallet — request a transfer when you're

            ready.

          </p>

        </section>

      </div>

    </main>

  );

};

export default Wallet;