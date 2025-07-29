import 'package:flutter/material.dart';
import 'dart:math' as math;

class ScoreCircle extends StatefulWidget {
  final int score;
  final double size;

  const ScoreCircle({
    Key? key,
    required this.score,
    this.size = 120,
  }) : super(key: key);

  @override
  _ScoreCircleState createState() => _ScoreCircleState();
}

class _ScoreCircleState extends State<ScoreCircle>
    with SingleTickerProviderStateMixin {
  late AnimationController _animationController;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      duration: Duration(milliseconds: 1500),
      vsync: this,
    );
    _animation = Tween<double>(
      begin: 0,
      end: widget.score / 100,
    ).animate(CurvedAnimation(
      parent: _animationController,
      curve: Curves.easeInOut,
    ));
    _animationController.forward();
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  Color _getScoreColor() {
    if (widget.score >= 70) return Color(0xFF10B981); // Green
    if (widget.score >= 50) return Color(0xFFF59E0B); // Orange
    return Color(0xFFEF4444); // Red
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: widget.size,
      height: widget.size,
      child: Stack(
        children: [
          // Background circle
          CustomPaint(
            size: Size(widget.size, widget.size),
            painter: CirclePainter(
              progress: 1.0,
              color: Color(0xFFE5E7EB),
              strokeWidth: 8,
            ),
          ),
          // Progress circle
          AnimatedBuilder(
            animation: _animation,
            builder: (context, child) {
              return CustomPaint(
                size: Size(widget.size, widget.size),
                painter: CirclePainter(
                  progress: _animation.value,
                  color: _getScoreColor(),
                  strokeWidth: 8,
                ),
              );
            },
          ),
          // Score text
          Center(
            child: Text(
              '${widget.score}',
              style: TextStyle(
                fontSize: 32,
                fontWeight: FontWeight.bold,
                color: Color(0xFF1F2937),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class CirclePainter extends CustomPainter {
  final double progress;
  final Color color;
  final double strokeWidth;

  CirclePainter({
    required this.progress,
    required this.color,
    required this.strokeWidth,
  });

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = (size.width - strokeWidth) / 2;

    final paint = Paint()
      ..color = color
      ..strokeWidth = strokeWidth
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round;

    canvas.drawArc(
      Rect.fromCircle(center: center, radius: radius),
      -math.pi / 2,
      2 * math.pi * progress,
      false,
      paint,
    );
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) => true;
}