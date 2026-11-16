import 'package:flutter/material.dart';

class SparrowHeading extends StatelessWidget {
  const SparrowHeading({
    super.key,
    required this.level,
    required this.text,
    this.style,
  });

  final int level;
  final String text;
  final TextStyle? style;

  @override
  Widget build(BuildContext context) => Text(text, style: style);
}
