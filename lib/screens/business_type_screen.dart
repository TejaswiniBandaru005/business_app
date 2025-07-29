import 'package:flutter/material.dart';
import '../widgets/gradient_background.dart';
import '../widgets/business_type_card.dart';
import '../models/business_type.dart';
import 'location_search_screen.dart';

class BusinessTypeScreen extends StatefulWidget {
  @override
  _BusinessTypeScreenState createState() => _BusinessTypeScreenState();
}

class _BusinessTypeScreenState extends State<BusinessTypeScreen> {
  String? selectedType;

  final List<BusinessType> businessTypes = [
    BusinessType(
      id: 'restaurant',
      name: 'Restaurant',
      description: 'Food & Dining',
      icon: Icons.restaurant,
      colors: [Color(0xFFEF4444), Color(0xFFF97316)],
    ),
    BusinessType(
      id: 'cafe',
      name: 'Café',
      description: 'Coffee & Beverages',
      icon: Icons.local_cafe,
      colors: [Color(0xFFF59E0B), Color(0xFFEAB308)],
    ),
    BusinessType(
      id: 'retail',
      name: 'Retail Store',
      description: 'Shopping & Goods',
      icon: Icons.shopping_bag,
      colors: [Color(0xFF3B82F6), Color(0xFF06B6D4)],
    ),
    BusinessType(
      id: 'salon',
      name: 'Beauty Salon',
      description: 'Beauty & Wellness',
      icon: Icons.content_cut,
      colors: [Color(0xFFEC4899), Color(0xFFF43F5E)],
    ),
    BusinessType(
      id: 'gym',
      name: 'Fitness Center',
      description: 'Health & Fitness',
      icon: Icons.fitness_center,
      colors: [Color(0xFF10B981), Color(0xFF059669)],
    ),
    BusinessType(
      id: 'bookstore',
      name: 'Bookstore',
      description: 'Books & Education',
      icon: Icons.menu_book,
      colors: [Color(0xFF8B5CF6), Color(0xFF6366F1)],
    ),
    BusinessType(
      id: 'automotive',
      name: 'Auto Service',
      description: 'Vehicle Services',
      icon: Icons.directions_car,
      colors: [Color(0xFF6B7280), Color(0xFF64748B)],
    ),
    BusinessType(
      id: 'healthcare',
      name: 'Healthcare',
      description: 'Medical Services',
      icon: Icons.local_hospital,
      colors: [Color(0xFF14B8A6), Color(0xFF06B6D4)],
    ),
  ];

  void _selectBusinessType(String typeId) {
    setState(() {
      selectedType = typeId;
    });
    
    Future.delayed(Duration(milliseconds: 200), () {
      Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => LocationSearchScreen(businessType: typeId),
        ),
      );
    });
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
                Text(
                  'Choose Your Business Type',
                  style: Theme.of(context).textTheme.headline2,
                  textAlign: TextAlign.center,
                ),
                SizedBox(height: 8),
                Text(
                  'Select the type of business you want to start',
                  style: Theme.of(context).textTheme.bodyText1,
                  textAlign: TextAlign.center,
                ),
                SizedBox(height: 32),
                
                // Business Types List
                Expanded(
                  child: ListView.builder(
                    itemCount: businessTypes.length,
                    itemBuilder: (context, index) {
                      final businessType = businessTypes[index];
                      return Padding(
                        padding: EdgeInsets.only(bottom: 12),
                        child: BusinessTypeCard(
                          businessType: businessType,
                          isSelected: selectedType == businessType.id,
                          onTap: () => _selectBusinessType(businessType.id),
                        ),
                      );
                    },
                  ),
                ),
                
                // Tip
                Container(
                  padding: EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: Color(0xFFDBEAFE),
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: Color(0xFF93C5FD)),
                  ),
                  child: Row(
                    children: [
                      Icon(Icons.lightbulb, color: Color(0xFF1D4ED8)),
                      SizedBox(width: 12),
                      Expanded(
                        child: Text(
                          'Tip: Choose the category that best matches your business idea. We\'ll provide tailored insights for your industry.',
                          style: TextStyle(
                            color: Color(0xFF1D4ED8),
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ),
                    ],
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