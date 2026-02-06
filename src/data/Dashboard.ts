// src/data/Dashboard.ts

export const DashboardData = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,245",
      change: "+12%",
      changeType: "positive",
      icon: "👥",
      color: "blue",
    },
    {
      title: "Active Sessions",
      value: "342",
      change: "Live",
      changeType: "neutral",
      icon: "🔴", 
      color: "green",
    },
    {
      title: "Revenue",
      value: "$8,420",
      change: "Monthly",
      changeType: "neutral",
      icon: "💰",
      color: "purple",
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "+0.8%",
      changeType: "positive",
      icon: "📈",
      color: "emerald",
    },
  ];

  const recentActivities = [
    { user: "John Doe", action: "Created new account", time: "2 minutes ago", avatar: "J" },
    { user: "Sarah Wilson", action: "Updated profile", time: "5 minutes ago", avatar: "S" },
    { user: "Mike Johnson", action: "Made a purchase", time: "10 minutes ago", avatar: "M" },
    { user: "Emma Davis", action: "Left a review", time: "15 minutes ago", avatar: "E" },
  ];

  return { stats, recentActivities };
};
