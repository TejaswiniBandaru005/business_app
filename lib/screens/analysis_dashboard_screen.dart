import 'package:flutter/material.dart';
import '../widgets/gradient_background.dart';
import '../widgets/score_circle.dart';
import '../widgets/stat_card.dart';
import '../widgets/tab_bar_custom.dart';
import '../widgets/competitor_card.dart';
import '../widgets/property_card.dart';
import '../widgets/supplier_card.dart';
import '../models/competitor.dart';
import '../models/property.dart';
import '../models/supplier.dart';
import 'user_suggestions_screen.dart';

class AnalysisDashboardScreen extends StatefulWidget {
  final String businessType;
  final String location;

  AnalysisDashboardScreen({
    required this.businessType,
    required this.location,
  });

  @override
  _AnalysisDashboardScreenState createState() => _AnalysisDashboardScreenState();
}

class _AnalysisDashboardScreenState extends State<AnalysisDashboardScreen>
    with TickerProviderStateMixin {
  late TabController _tabController;
  bool _isLoading = true;
  int _activeTabIndex = 0;

  final int profitabilityScore = 78;
  final int competitorCount = 12;
  final int vacantProperties = 8;
  final String avgRent = '\$2.8K';

  final List<Competitor> competitors = [
    Competitor(
      name: "Joe's Coffee Corner",
      distance: "120m",
      rating: 4.2,
      type: "Direct",
    ),
    Competitor(
      name: "Urban Bistro",
      distance: "250m",
      rating: 4.5,
      type: "Indirect",
    ),
    Competitor(
      name: "Quick Bites",
      distance: "180m",
      rating: 3.8,
      type: "Direct",
    ),
    Competitor(
      name: "The Local Spot",
      distance: "320m",
      rating: 4.1,
      type: "Indirect",
    ),
  ];

  final List<Property> properties = [
    Property(
      address: "123 Main Street",
      size: "1,200 sq ft",
      rent: "\$2,800/month",
      status: "Available",
    ),
    Property(
      address: "456 Commerce Ave",
      size: "800 sq ft",
      rent: "\$2,200/month",
      status: "Available",
    ),
    Property(
      address: "789 Business Blvd",
      size: "1,500 sq ft",
      rent: "\$3,200/month",
      status: "Coming Soon",
    ),
  ];

  final List<Supplier> suppliers = [
    Supplier(
      name: "Metro Food Distributors",
      category: "Food Supplies",
      distance: "2.1 km",
      rating: 4.6,
    ),
    Supplier(
      name: "Office Plus",
      category: "Equipment",
      distance: "1.8 km",
      rating: 4.3,
    ),
    Supplier(
      name: "City Logistics",
      category: "Delivery Service",
      distance: "3.2 km",
      rating: 4.4,
    ),
  ];

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 4, vsync: this);
    _tabController.addListener(() {
      setState(() {
        _activeTabIndex = _tabController.index;
      });
    });
    
    Future.delayed(Duration(seconds: 2), () {
      setState(() {
        _isLoading = false;
      });
    });
  }

  String _getBusinessTypeDisplay() {
    final types = {
      'restaurant': 'Restaurant',
      'cafe': 'Café',
      'retail': 'Retail Store',
      'salon': 'Beauty Salon',
      'gym': 'Fitness Center',
      'bookstore': 'Bookstore',
      'automotive': 'Auto Service',
      'healthcare': 'Healthcare',
    };
    return types[widget.businessType] ?? widget.businessType;
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoading) {
      return Scaffold(
        body: GradientBackground(
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  width: 80,
                  height: 80,
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      colors: [Color(0xFF3B82F6), Color(0xFF8B5CF6)],
                    ),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: Icon(
                    Icons.trending_up,
                    size: 40,
                    color: Colors.white,
                  ),
                ),
                SizedBox(height: 24),
                Text(
                  'Analyzing ${widget.location}',
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF1F2937),
                  ),
                ),
                SizedBox(height: 8),
                Text(
                  'Processing market data for your ${_getBusinessTypeDisplay().toLowerCase()}...',
                  style: TextStyle(
                    color: Color(0xFF6B7280),
                  ),
                  textAlign: TextAlign.center,
                ),
                SizedBox(height: 24),
                CircularProgressIndicator(),
              ],
            ),
          ),
        ),
      );
    }

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 2,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Color(0xFF1F2937)),
          onPressed: () => Navigator.pop(context),
        ),
        actions: [
          IconButton(
            icon: Icon(Icons.people, color: Colors.white),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => UserSuggestionsScreen(),
                ),
              );
            },
            style: IconButton.styleFrom(
              backgroundColor: Color(0xFF10B981),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12),
              ),
            ),
          ),
          SizedBox(width: 16),
        ],
      ),
      body: GradientBackground(
        child: Column(
          children: [
            // Header
            Padding(
              padding: EdgeInsets.all(20),
              child: Column(
                children: [
                  Container(
                    padding: EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                    decoration: BoxDecoration(
                      color: Color(0xFFDBEAFE),
                      borderRadius: BorderRadius.circular(16),
                    ),
                    child: Text(
                      _getBusinessTypeDisplay(),
                      style: TextStyle(
                        color: Color(0xFF1D4ED8),
                        fontSize: 12,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                  SizedBox(height: 8),
                  Text(
                    widget.location,
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: Color(0xFF1F2937),
                    ),
                  ),
                  Text(
                    'Location Analysis Report',
                    style: TextStyle(
                      color: Color(0xFF6B7280),
                      fontSize: 12,
                    ),
                  ),
                ],
              ),
            ),
            
            // Score Card
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 20),
              child: Card(
                child: Padding(
                  padding: EdgeInsets.all(24),
                  child: Column(
                    children: [
                      ScoreCircle(score: profitabilityScore),
                      SizedBox(height: 16),
                      Text(
                        'Business Viability Score',
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                          color: Color(0xFF1F2937),
                        ),
                      ),
                      SizedBox(height: 4),
                      Text(
                        profitabilityScore >= 70
                            ? "Excellent location!"
                            : profitabilityScore >= 50
                                ? "Good potential"
                                : "Consider alternatives",
                        style: TextStyle(
                          color: Color(0xFF6B7280),
                          fontSize: 14,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            SizedBox(height: 20),
            
            // Quick Stats
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 20),
              child: Row(
                children: [
                  Expanded(
                    child: StatCard(
                      icon: Icons.people,
                      value: competitorCount.toString(),
                      label: 'Competitors',
                      color: Colors.orange,
                    ),
                  ),
                  SizedBox(width: 12),
                  Expanded(
                    child: StatCard(
                      icon: Icons.business,
                      value: vacantProperties.toString(),
                      label: 'Vacant Shops',
                      color: Colors.blue,
                    ),
                  ),
                  SizedBox(width: 12),
                  Expanded(
                    child: StatCard(
                      icon: Icons.attach_money,
                      value: avgRent,
                      label: 'Avg. Rent',
                      color: Colors.green,
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 20),
            
            // Tab Bar
            TabBarCustom(
              controller: _tabController,
              tabs: [
                Tab(text: 'Overview'),
                Tab(text: 'Competition'),
                Tab(text: 'Properties'),
                Tab(text: 'Suppliers'),
              ],
            ),
            
            // Tab Content
            Expanded(
              child: TabBarView(
                controller: _tabController,
                children: [
                  _buildOverviewTab(),
                  _buildCompetitorsTab(),
                  _buildPropertiesTab(),
                  _buildSuppliersTab(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildOverviewTab() {
    return SingleChildScrollView(
      padding: EdgeInsets.all(20),
      child: Column(
        children: [
          Card(
            child: Padding(
              padding: EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Icon(Icons.check_circle, color: Colors.green, size: 20),
                      SizedBox(width: 8),
                      Text(
                        'Strengths',
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 16,
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: 16),
                  _buildBulletPoint('High foot traffic during peak hours (2,500+ daily)'),
                  _buildBulletPoint('Strong demographic match for target customers'),
                  _buildBulletPoint('Good public transportation accessibility'),
                ],
              ),
            ),
          ),
          SizedBox(height: 16),
          Card(
            child: Padding(
              padding: EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Icon(Icons.warning, color: Colors.orange, size: 20),
                      SizedBox(width: 8),
                      Text(
                        'Considerations',
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 16,
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: 16),
                  _buildBulletPoint('Moderate competition density in 500m radius'),
                  _buildBulletPoint('Parking availability limited during weekends'),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildBulletPoint(String text) {
    return Padding(
      padding: EdgeInsets.only(bottom: 12),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 8,
            height: 8,
            margin: EdgeInsets.only(top: 6, right: 12),
            decoration: BoxDecoration(
              color: Color(0xFF10B981),
              shape: BoxShape.circle,
            ),
          ),
          Expanded(
            child: Text(
              text,
              style: TextStyle(
                color: Color(0xFF6B7280),
                fontSize: 14,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildCompetitorsTab() {
    return ListView.builder(
      padding: EdgeInsets.all(20),
      itemCount: competitors.length,
      itemBuilder: (context, index) {
        return Padding(
          padding: EdgeInsets.only(bottom: 12),
          child: CompetitorCard(competitor: competitors[index]),
        );
      },
    );
  }

  Widget _buildPropertiesTab() {
    return ListView.builder(
      padding: EdgeInsets.all(20),
      itemCount: properties.length,
      itemBuilder: (context, index) {
        return Padding(
          padding: EdgeInsets.only(bottom: 12),
          child: PropertyCard(property: properties[index]),
        );
      },
    );
  }

  Widget _buildSuppliersTab() {
    return ListView.builder(
      padding: EdgeInsets.all(20),
      itemCount: suppliers.length,
      itemBuilder: (context, index) {
        return Padding(
          padding: EdgeInsets.only(bottom: 12),
          child: SupplierCard(supplier: suppliers[index]),
        );
      },
    );
  }
}