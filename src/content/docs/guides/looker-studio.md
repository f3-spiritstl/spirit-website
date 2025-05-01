---
title: Looker Studio
description: How to use Looker Studio
---

## Further reading

- [Looker Studio Official Help Center](https://support.google.com/looker-studio/)
- [Looker Studio Learning Resources](https://lookerstudio.google.com/learn/)
- [Looker Studio Developer Guide](https://developers.google.com/looker-studio)

## What is Looker Studio?

[Looker Studio](https://lookerstudio.google.com/) is Google’s free dashboard and reporting platform that enables users to visualize data from a wide range of sources. It provides interactive charts, graphs, tables, and other widgets that allow users to explore and share insights in a user-friendly, browser-based interface.

Looker Studio supports data blending, calculated fields, filter controls, drill-downs, scheduled report delivery, and permission-based access to visualizations.

## How We Use Looker Studio
We use Looker Studio to track and visualize metrics for our F3 region activity, including attendance, site activity, and leadership engagement. These dashboards serve both operational and strategic purposes, helping Site Qs, SLT, and PAX monitor trends and performance.

### Reports

The primary report we use is hosted here:

👉 [F3 Metrics Dashboard](https://lookerstudio.google.com/reporting/5e5bc2b0-6cef-4401-978e-386f09fee847)

Key pages and features include:
- **AO Dashboard** – Beatdown counts, first-time guests (FNGs), and AO comparisons
- **PAX Dashboard** – Individual workout stats, AO attendance summaries, and leadership roles
- **Filters** – Region, date range, AO name, and other dropdowns to customize data views
- **Visuals** – Line charts, bar graphs, and tables for quick insights

These dashboards are updated frequently and are intended to be shared with internal leadership teams and optionally, the broader PAX.

### Database Connections

The data source for this report is a **MySQL database**. We use a direct connector to integrate the database with Looker Studio. Features of our setup:

- **Refresh Schedule**: The data is automatically refreshed on a short, regular interval (e.g., hourly or daily), ensuring the dashboards reflect near-real-time data.
- **Schema**: The MySQL schema includes attendance logs, AO definitions, user profiles, and leadership history.
- **Maintenance**: Queries used in Looker Studio are reviewed periodically-ish to ensure performance and accuracy.

---

