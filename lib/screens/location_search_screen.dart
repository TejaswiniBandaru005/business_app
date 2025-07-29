import 'package:flutter/material.dart';
import '../widgets/gradient_background.dart';
import '../widgets/location_card.dart';
import '../models/location.dart';
import 'analysis_dashboard_screen.dart';

class LocationSearchScreen extends StatefulWidget {
  final String businessType;

  LocationSearchScreen({required this.businessType});

  @override
  _LocationSearchScreenState createState() => _LocationSearchScreenState();
}

class _LocationSearchScreenState extends State<LocationSearchScreen> {
  final TextEditingController _searchController = TextEditingController();
  bool _isSearching = false;

  final List<Location> popularLocations = [
    Location(
      name: 'Downtown District',
      type: 'High Traffic',
      rating: 4.8,
    ),
    Location(
      name: 'Shopping Mall Area',
      type: 'Retail Hub',
      rating: 4.6,
    ),
    Location(
      name: 'University Quarter',
      type: 'Student Zone',
      rating: 4.5,
    ),
    Location(
      name: 'Business Park',
      type: 'Corporate Area',
      rating: 4.3,
    ),
    Location(
      name: 'Residential Complex',
      type: 'Local Community',
      rating: 4.2,
    ),
  ];

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

  void _searchLocation() {
    if (_searchController.text.trim().isNotEmpty) {
      setState(() {
        _isSearching = true;
      });
      
      Future.delayed(Duration(milliseconds: 1500), () {
        setState(() {
          _isSearching = false;
        });
        _navigateToAnalysis(_searchController.text);
      });
    }
  }

  void _selectLocation(String locationName) {
    setState(() {
      _isSearching = true;
    });
    
    Future.delayed(Duration(milliseconds: 1000), () {
      setState(() {
        _isSearching = false;
      });
      _navigateToAnalysis(locationName);
    });
  }

  void _navigateToAnalysis(String location) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => AnalysisDashboardScreen(
          businessType: widget.businessType,
          location: location,
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Color(0xFF1F2937)),
          onPressed: () => Navigator.pop(context),
        ),
      ),
      body: GradientBackground(
        child: SafeArea(
          child: Padding(
            padding: EdgeInsets.all(20),
            child: Column(
              children: [
                // Header
                Container(
                  padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                  decoration: BoxDecoration(
                    color: Color(0xFFDBEAFE),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: Text(
                    _getBusinessTypeDisplay(),
                    style: TextStyle(
                      color: Color(0xFF1D4ED8),
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
                SizedBox(height: 16),
                Text(
                  'Where do you want to open?',
                  style: Theme.of(context).textTheme.headline2,
                  textAlign: TextAlign.center,
                ),
                SizedBox(height: 8),
                Text(
                  'Search for a location or choose from popular areas',
                  style: Theme.of(context).textTheme.bodyText1,
                  textAlign: TextAlign.center,
                ),
                SizedBox(height: 32),
                
                // Search Bar
                Container(
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(16),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black12,
                        blurRadius: 8,
                        offset: Offset(0, 2),
                      ),
                    ],
                  ),
                  child: TextField(
                    controller: _searchController,
                    decoration: InputDecoration(
                      hintText: 'Enter city, neighborhood, or address...',
                      prefixIcon: Icon(Icons.search, color: Color(0xFF9CA3AF)),
                      border: InputBorder.none,
                      contentPadding: EdgeInsets.all(16),
                    ),
                    onSubmitted: (_) => _searchLocation(),
                  ),
                ),
                SizedBox(height: 16),
                
                // Search Button
                Container(
                  width: double.infinity,
                  height: 60,
                  child: ElevatedButton(
                    onPressed: _isSearching ? null : _searchLocation,
                    style: ElevatedButton.styleFrom(
                      primary: _isSearching ? Colors.grey : null,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(16),
                      ),
                    ),
                    child: _isSearching
                        ? Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              SizedBox(
                                width: 20,
                                height: 20,
                                child: CircularProgressIndicator(
                                  strokeWidth: 2,
                                  valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                                ),
                              ),
                              SizedBox(width: 12),
                              Text('Analyzing Location...'),
                            ],
                          )
                        : Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Icon(Icons.search),
                              SizedBox(width: 8),
                              Text('Analyze This Location'),
                            ],
                          ),
                  ),
                ),
                SizedBox(height: 32),
                
                // Current Location Button
                LocationCard(
                  icon: Icons.my_location,
                  title: 'Use Current Location',
                  subtitle: 'Analyze areas near you',
                  color: Colors.green,
                  onTap: () => _selectLocation('Current Location'),
                ),
                SizedBox(height: 24),
                
                // Popular Locations
                Align(
                  alignment: Alignment.centerLeft,
                  child: Text(
                    'Popular Business Areas',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Color(0xFF1F2937),
                    ),
                  ),
                ),
                SizedBox(height: 16),
                
                Expanded(
                  child: ListView.builder(
                    itemCount: popularLocations.length,
                    itemBuilder: (context, index) {
                      final location = popularLocations[index];
                      return Padding(
                        padding: EdgeInsets.only(bottom: 12),
                        child: LocationCard(
                          icon: Icons.location_on,
                          title: location.name,
                          subtitle: location.type,
                          rating: location.rating,
                          color: Colors.blue,
                          onTap: () => _selectLocation(location.name),
                        ),
                      );
                    },
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}